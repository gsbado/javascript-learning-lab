const http = require('http');
const PORTA = 3000;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
  });

  if (req.method === 'GET' && req.url === '/produtos') {
    const produtos = [
      { nome: 'Camiseta Preta', preco: 49.90, categoria: 'Camisetas' },
      { nome: 'Calça Jeans', preco: 119.00, categoria: 'Calças' },
      { nome: 'Casaco de Moletom', preco: 150.00, categoria: 'Casacos' },
    ];
    res.end(JSON.stringify(produtos));
  } 
  
  else if (req.method === 'GET' && req.url === '/alunos') {
    const alunos = [
      { nome: 'Alfredo', idade: 25, curso: 'Web Development' },
      { nome: 'Joana', idade: 18, curso: 'Web Development' },
      { nome: 'Maria', idade: 30, curso: 'Programação' },
    ];
    res.end(JSON.stringify(alunos));
  } 
  
  else {
    res.writeHead(404, {
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
});

servidor.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
  console.log(`Acesse: http://localhost:${PORTA}/produtos`);
  console.log(`Acesse: http://localhost:${PORTA}/alunos`);
});
