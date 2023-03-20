
     const scriptURL = '<https://script.google.com/macros/s/AKfycbx9ZZRa2dGYtZZFSfc7Ei0zdwG2HeXjWsl6jlttD4jaw3ynfxq3fMxsT_2C1wUxc98lww/exec>'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
        

        var tablinks= document.getElementsByClassName("tab-links");
        var tabcontents= document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablinks of tablinks){
                tablinks.classList.remove("active-link");
            }
            for(tabcontents of tabcontents){
               tabcontents.classList.remove("active-tab");
            }
            event.currentTarget.classlist.add("active-link");
            document.getElementById(tabname).classlist.add("active-tab");

        }