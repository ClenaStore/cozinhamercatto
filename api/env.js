export default function handler(req, res) {
  // Lê a senha armazenada como variável de ambiente na Vercel
  const senha = process.env.SENHA_COZINHA || "";

  // Retorna apenas o valor necessário, sem expor outras envs
  res.status(200).json({ SENHA_COZINHA: senha });
}
