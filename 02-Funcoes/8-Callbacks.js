// Função para ler o conteúdo de um arquivo de forma síncrona
function lerArquivo(nomeArquivo) {
  // Lê o conteúdo do arquivo especificado pelo parâmetro 'nomeArquivo'
  const conteudo = fs.readFileSync(nomeArquivo, 'utf8');

  // Imprime o conteúdo do arquivo no console
  console.log(conteudo);
}

// Chama a função 'lerArquivo' passando o nome do arquivo 'arquivo.txt' como parâmetro
lerArquivo('arquivo.txt');

// Função para ler o conteúdo de um arquivo de forma assíncrona
function lerArquivo(nomeArquivo, callback) {
  // Lê o conteúdo do arquivo especificado pelo parâmetro 'nomeArquivo' de forma assíncrona
  fs.readFile(nomeArquivo, 'utf8', (err, conteudo) => {
    // Verifica se ocorreu um erro durante a leitura do arquivo
    if (err) {
      // Se ocorreu um erro, chama a função de callback passando o erro como parâmetro
      callback(err);
    } else {
      // Se não ocorreu um erro, chama a função de callback passando 'null' como primeiro 
      //parâmetro (indicando que não ocorreu um erro) e o conteúdo do arquivo como segundo parâmetro
      callback(null, conteudo);
    }
  });
}

// Chama a função 'lerArquivo' passando o nome do arquivo 'arquivo.txt' como primeiro 
//parâmetro e uma função de callback como segundo parâmetro
lerArquivo('arquivo.txt', (err, conteudo) => {
  // Verifica se ocorreu um erro durante a leitura do arquivo
  if (err) {
    // Se ocorreu um erro, imprime o erro no console
    console.error(err);
  } else {
    // Se não ocorreu um erro, imprime o conteúdo do arquivo no console
    console.log(conteudo);
  }
});