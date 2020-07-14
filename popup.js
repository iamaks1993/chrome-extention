document.addEventListener('DOMContentLoaded', function() {

    var txtInp = document.getElementById("txt_test_inp");
    txtInp.value = localStorage.getItem('test-inp');
    var counter = 1;
    var checkPageButton = document.getElementById('checkPage');

    checkPageButton.addEventListener('click', function() {

        localStorage.setItem('test-inp',txtInp.value);
        //alert(counter++);
        // chrome.tabs.getSelected(null, function(tab) {
        //     d = document;
        //
        //     var f = d.createElement('form');
        //     f.action = 'http://gtmetrix.com/analyze.html?bm';
        //     f.method = 'post';
        //     var i = d.createElement('input');
        //     i.type = 'hidden';
        //     i.name = 'url';
        //     i.value = tab.url;
        //     f.appendChild(i);
        //     d.body.appendChild(f);
        //     f.submit();
        // });
    }, false);

  /*var dataToWebPage = {text: 'test', foo: 1, bar: false};
    chrome.tabs.executeScript({
        code: '(' + function(params) {
            //This function will  work in webpage
            console.log(params); //logs in webpage console
            return {success: true, response: "This is from webpage."};
        } + ')(' + JSON.stringify(dataToWebPage) + ');'
    }, function(results) {
        //This is the callback response from webpage
        console.log(results[0]); //logs in extension console
    });*/
}, false);