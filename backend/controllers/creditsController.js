const supabase = require('../lib/supabase');

exports.addCredits = async (req, res) => {
  const { userId, activity, credits } = req.body;

  const { data, error } = await supabase
    .from('credits')
    .insert([{ user_id: userId, activity, credits_earned: credits }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Credits added successfully!', data });
};

exports.getCredits = async (req, res) => {
  const { userId } = req.query;

  const { data, error } = await supabase
    .from('credits')
    .select('*')
    .eq('user_id', userId);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ credits: data });
};
