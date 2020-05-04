$$(document).on('page:init', '.page[data-name="sprawdzpesel"]', function (e) {
          var zbyt_krotkie;
          function sprawdzPESEL(pesel) {
            var reg = /^[0-9]{11}$/;
            if(reg.test(pesel) == false) 
            return false;
            else
            {
                var digits = (""+pesel).split("");
            
                var checksum = (1*parseInt(digits[0]) + 3*parseInt(digits[1]) + 7*parseInt(digits[2]) + 9*parseInt(digits[3]) + 1*parseInt(digits[4]) + 3*parseInt(digits[5]) + 7*parseInt(digits[6]) + 9*parseInt(digits[7]) + 1*parseInt(digits[8]) + 3*parseInt(digits[9]))%10;
                if(checksum==0) checksum = 10;
                    checksum = 10 - checksum;
        
                return (parseInt(digits[10])==checksum);
            }
          }
          $$('button[id="sprawdz"').on('click', function() {
            var nr_pesel = document.getElementById('pesel').value;
            if (nr_pesel.length < 11){
                zbyt_krotkie = true;
            } else {
                zbyt_krotkie = false;
            }
            if(zbyt_krotkie){
                document.getElementById('pesel').style.backgroundColor = 'yellow';
                document.getElementById('wynik').innerHTML = 'Numer PESEL jest zbyt krótki!';
            }
            if(!zbyt_krotkie){
                document.getElementById('pesel').style.backgroundColor = 'white';
                document.getElementById('wynik').innerHTML = '';
            }
            if(sprawdzPESEL(document.getElementById('pesel').value)){
                document.getElementById('pesel').style.backgroundColor = 'green';
                document.getElementById('wynik2').innerHTML = nr_pesel + ' jest poprawnym numerem PESEL!';
                console.log('true');
            } else {
                document.getElementById('pesel').style.backgroundColor = 'red';
                document.getElementById('wynik2').innerHTML = nr_pesel + ' NIE jest poprawnym numerem PESEL!';
                console.log('false');
            }
              
          });
        })
