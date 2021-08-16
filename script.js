
              const quotes = document.getElementById("quotes-1");
              const auther = document.getElementById("author");
              const newQuotes= document.getElementById("new-quotes");
        let realData ="";
      
        const getNewQuotes = () => {
            let rnum = Math.floor(Math.random() * 100 );
            quotes.innerText = `${realData[rnum].text}`;
            auther.innerText = `${realData[rnum].author}`;
            console.log(realData[rnum].text);
            console.log(realData[rnum].author)
        };
        
        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
        
                getNewQuotes();
                 ///console.log(realData.length); 
                 } catch(error) {}
           
        
           newQuotes.addEventListener("click" , getNewQuotes);     // when click on newQuotes u ll get new quotes
        };
        getQuotes(); 
    
