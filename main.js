let total = 0;
function mainSeatId(){
    const mainSeat = document.getElementById('main-seat');
    let arr = [];
    for(let i=0; i<=mainSeat.childNodes.length-1; i++){
        if(mainSeat.childNodes[i].id !== undefined){
        arr.push(mainSeat.childNodes[i].id);
        }

    }
   return arr;    
}


let mainSeatIds = mainSeatId();
let arr1 = [];
let unique = [];
let count = 0;
for(let i=0; i <= mainSeatIds.length-1; i++){
    let thisSeat = String(mainSeatIds[i]);
    document.getElementById(thisSeat).addEventListener('click', function(){
     arr1.push(thisSeat);
      arr1.forEach(element => {
        if(!unique.includes(element) && (unique.length>=0 && unique.length<4)){
            unique.push(element);
            setBackgroundColor(element);
            count=count+1;
            setInnerText('seat-chosen',count);
            setInnerText('seat-left', getInnerText('seat-left')-1);
            ticketRow('seat-name',element);
             total += 550;
             totalPrice();
             grandTotal('grand-total',total);
             maximumSeatsWarning('warning');

            if(unique.length === 4)
            {
                const button = document.getElementById('apply-button');
                document.getElementById('input-field').addEventListener('keyup', function(event){
                    console.log(event.value);
                const inputFieldText = event.target.value;
                
                if(inputFieldText === 'NEW15' && inputFieldText.length === 5){
                    let discountApplied = false;
                         button.removeAttribute('disabled');
                         button.addEventListener('click',function(){
                           let discountPrice = parseInt(total*(15/100));
                           total -= discountPrice;
                           grandTotal('grand-total',total);
                           const div = document.getElementById('append-discount');
                           const p = document.createElement('p');
                           p.innerText =`discount (-${discountPrice})`;
                           div.appendChild(p);
                           const remove = document.getElementById('remove');
                           remove.style.display='none';
                        });       
                }
               else if(inputFieldText === 'COUPLE20' && inputFieldText.length === 8){
                let discountApplied = false;
                   button.removeAttribute('disabled');
                   button.addEventListener('click',function(){
                     let discountPrice = parseInt(total*(20/100));
                     total -= discountPrice;
                     grandTotal('grand-total',total);
                     const div = document.getElementById('append-discount');
                     const p = document.createElement('p');
                     p.innerText =`discount (-${discountPrice})`;
                     div.appendChild(p);
                     const remove = document.getElementById('remove');
                     remove.style.display='none';
               
                  });       
               }
                else 
                {
                  
                   button.setAttribute('disabled',true);
                  
                }
               })
            }

             if(unique.length >= 1){
             const num = document.getElementById('number').addEventListener('keyup', function(event){  
                let test = event.target.value;
                let confirmButton = document.getElementById('confirm');  
                if(test.length === 11){
                    confirmButton.removeAttribute('disabled');
                }
                else
                    confirmButton.setAttribute('disabled',true);
            
                   
            
             });
            }
            
        }
       
     });
    })
}

document.querySelectorAll('a:contains("Search")').forEach((searchBtn) => {
    searchBtn.addEventListener('click', () => {
        const searchTerm = prompt("Enter your search term:");
        if (searchTerm) {
            alert(`You searched for: ${searchTerm}`);
            // Add your search logic here
        }
    });
});


function maximumSeatsWarning(id){
    const p = document.getElementById(id);
    const para = document.createElement('p');
    para.innerText = `* ${unique.length}/4 seats selected.`;
    p.appendChild(para);
    para.style.color = 'red';
}

function setInnerText(id,value) {
   const text = document.getElementById(id);
   text.innerText = value; 
}
function getInnerText(id){
    const text = document.getElementById(id);
    const get = text.innerText;
    return get;
}

function ticketRow(id, value){
    const tb = document.getElementById(id);
    const tr = document.createElement('tr');
    tb.appendChild(tr);
    const td = document.createElement('td');
    td.innerText = value;
    tr.appendChild(td);
    const tdc = document.createElement('td');
    tdc.innerText = "Economy";
    tr.appendChild(tdc);
    const tdp = document.createElement('td');
    tdp.classList.add('price');
    tdp.innerText = 550;
    tr.appendChild(tdp);

}
function totalPrice(){
    let totalPrice =  document.getElementById('total-price');
       totalPrice.innerText = total; 
       
}
 function grandTotal(id, value){
    let grandTotal = document.getElementById(id);
     grandTotal.innerText = value;
 }
 function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500');
}
 
