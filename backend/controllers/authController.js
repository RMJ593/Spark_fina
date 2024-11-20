const supabase = require('../lib/supabase');

exports.signUp = async (req, res) => {
  const { fullname, email, password, password2, options } = req.body;

  // Validate input fields
  if (!fullname || !email || !password || !password2 || !options || !options.emailRedirectTo) {
    return res.status(400).json({ error: 'All fields are required.' });  // and options ,options.emailRedirectTo are reqd.
  }
  if (password !== password2) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  try {
    // Step 1: Sign up the user in auth.users
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: options.emailRedirectTo,  // Using emailRedirectTo from options
      },
    });

    if (authError) {
      console.error(authError);
      return res.status(400).json({ error: authError.message });
    }

    const userId = authData.user.id; // Get the user ID from Supabase

    // Step 2: Insert data into the public.profiles table
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([{ userid: userId, fullname, email }]);

    if (profileError) {
      console.error(profileError);
      return res.status(500).json({ error: 'Failed to create profile.' });
    }

    // Respond with success
    return res.status(201).json({
      message: 'Signup successful! Please check your email to confirm your account.',
      status: 'success',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
};

// Confirm Email Endpoint
exports.confirmEmail = async (req, res) => {
  const token_hash = req.query.token_hash;
  const type = req.query.type;
  const next = req.query.next ?? '/';

  if (!token_hash || !type) {
    return res.status(400).json({ error: 'Invalid or missing parameters.' });
  }

  try {
    // Verify the token
    const { error } = await supabase.auth.verifyOtp({
      type,        // Should be "email" for email verification
      token_hash,  // The token hash from the query string
    });

    if (error) {
      console.error('Verification failed:', error.message);
      return res.status(400).json({ error: 'Invalid or expired token.' });
    }

    // If successful, redirect the user to the "next" URL
    res.redirect(303, next);
  } catch (err) {
    console.error('Error verifying token:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};



exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({
    message: 'Login successful!',
    session: data,
  });
};

exports.resetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({
    message: 'Password reset email sent. Please check your inbox.',
  });
};
