window.onscroll = function () {
    scrollFunction()
  };
  
  
  const button = document.getElementById('scroll-btn')
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block'
    } else {
      button.style.display = 'none'
    }
  }
  const gotoTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  