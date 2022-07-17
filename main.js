const mainDiv = document.getElementById('main');

const main = () =>{
  const conteiner = document.createElement('section')
  conteiner.className = 'conteiner'

  return conteiner;
}

mainDiv.append(main())