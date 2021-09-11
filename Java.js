function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function demo() {
    var chat = document.getElementById("chat");
    chat.innerHTML = "Olá,Mundo";
    await sleep(1000);
    for (let i = 0; i < 5; i++) {
        if (i === 3)
          await sleep(1000);
        console.log(i);
      }
    }
    
    demo();


 
    // console.write("Tchau");