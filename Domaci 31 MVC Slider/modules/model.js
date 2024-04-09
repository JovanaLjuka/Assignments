const model = (() => {
  let data = [
    {
      id: 1,
      src: '../img/slika1.jpg',
      alt: 'slika1',
    },
    {
      id: 2,
      src: '../img/slika2.jpg',
      alt: 'slika2',
    },
    {
      id: 3,
      src: '../img/slika3.jpg',
      alt: 'slika3',
    },
    {
      id: 4,
      src: '../img/slika4.jpg',
      alt: 'slika4',
    },
  ]

  let picture = function (id, src, alt) {
    this.id = id
    this.src = src
    this.alt = alt
  }

  return {
    getPicture: (i) => {
      let object = new picture(data[i].id, data[i].src, data[i].alt)
      return object
    },
  }
})()
export default model
