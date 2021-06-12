let btn = document.getElementById(`btn`);
    btn.addEventListener(`click`, function () {
      let mima = prompt(`请输入密码`);
      console.log(typeof mima);
      if (mima >= 'moya') {
        const ho = document.getElementById('ho')
        ho.innerText = `Welcome`
          console.log(`Welcome`)
      } else {
        const ho = document.getElementById('ho')
        ho.innerText = `密码错误`
        console.log(`密码错误`)
      }
    });