         // Function to extract form data (called from Android)
         function extractAndSendData() {
            var formData = {
                phoneNumber: document.getElementById('phoneNumber').value,
                Name: document.getElementById('personSelect').value,
                FAT: document.getElementById('num1').value,
                SNF: document.getElementById('num2').value,
                KG: document.getElementById('num3').value,
                RATE: document.getElementById('rate').value,
                TOTAL: document.getElementById('total').value
            };
            Android.receiveFormData(JSON.stringify(formData));
        }

       function setCurrentDateTime() {
            var currentDate = new Date();
            var year = currentDate.getFullYear();
            var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            var day = currentDate.getDate().toString().padStart(2, '0');
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes().toString().padStart(2, '0');
            var ampm = hours >= 12 ? 'PM' : 'AM';
        
            hours = hours % 12;
            hours = hours ? hours : 12; // Set 12 for midnight
            var formattedDateTime = `${day}/${month}/${year}   ${hours.toString().padStart(2, '0')}:${minutes}_${ampm}`;

            document.getElementById('datetimeInput').value = formattedDateTime;
        }
        window.onload = setCurrentDateTime;

        function rateandtotal() {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num3 = document.getElementById("num3").value;

            var Rate = (num1 * 3.9836) + (num2 * 2.6557);
            var Total = Rate * num3;
            var Round = Math.round(Total);
            var Round2 = Rate.toFixed(2);

            document.getElementById('rate').value = Round2;
            document.getElementById('total').value = Round;
        }

        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12 || 12;

            const clock = document.getElementById('clock');
            clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        }
        setInterval(updateClock, 1000);
        updateClock();

        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            const dateString = now.toLocaleDateString('en-US', options);
            document.getElementById('date').innerText = dateString;
        }
        updateDate();

        function multiplyNumbers() {
            // Get the input values
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num3 = document.getElementById("num3").value;

            var Rate = (num1 * 3.9836) + (num2 * 2.6557);
            var Total = Rate * num3;
            var Round = Math.round(Total);
            var Round2 = Rate.toFixed(2);

            document.getElementById("Rate").innerHTML = "Rate: " + Round2;
            document.getElementById("Total").innerHTML = "Total Rs: " + Round;
            document.getElementById("num4").innerHTML = "Rate: " + Round2;
        }

        function playSound() {
            var audio = document.getElementById("myAudio");
            audio.play();
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxRKCypXV-ui831AWG75DbFEZE9IuPfQ0GmMOykppJg7mQdrVP7Mx1UkUV_UK1EgWElJg/exec'
        const form = document.forms['lol']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            document.getElementById("successMessage").style.display = "block";
        })

        function updatePhoneNumber() {
        var personSelect = document.getElementById("personSelect");
        var phoneNumberInput = document.getElementById("phoneNumber");

        switch (personSelect.value) {
            case "চন্দনা ঘোষ":
                phoneNumberInput.value = "6296398894";
                break;
            case "রাজেন্দ্র প্রসাদ ঘোষ":
                phoneNumberInput.value = "9732250108";
                break;
            case "রিঙ্কু কোলে":
                phoneNumberInput.value = "";
                break;
            case "কল্যাণী চক্রবর্তী":
                phoneNumberInput.value = "";
                break;
            case "মধুমিতা মন্ডল":
                phoneNumberInput.value = "";
                    break;
            case "বিকাশ কুমার ঘোষ":
                phoneNumberInput.value = "";
                    break;
            case "সুলোচনা ঘোষ":
                phoneNumberInput.value = "";
                    break;
            case "রাহেলা শেখ":
                phoneNumberInput.value = "";
                    break;
            case "সুজাতা ঘোষ":
                phoneNumberInput.value = "";
                    break;
            case "Abhijit":
                phoneNumberInput.value = "9775815681";
                    break;
            default:
                phoneNumberInput.value = "[Select a person]";
        }
    }