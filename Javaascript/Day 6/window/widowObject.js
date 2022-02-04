
// Window Object 

    

    const  str = 'Hello';
    console.log(`str - ${str}`);
    console.log(`windnow str -`, window.str);

    console.log('-----------------');

    function getName() {
        return 'chandan'
    }

    console.log(`getName - `,getName());
    console.log(`window getName - `,window.getName());

    //-----------------------------------------------------

    window.console.log(window);


    console.log('inner Height', window.innerHeight,'\ninnerHeight varies as the height of the tab is reduced');
    console.log('inner Width', window.innerWidth,'\ninner Width varies as the screen size is reduced')

    // alert Method 
    // window.alert('Good AfterNoon');

    // confirm
    // window.confirm('edge is good or not');


    // const isEligible = window.confirm('Is your age greater than 18')
    // console.log('isEligible',isEligible)

    // console.log('---------------------------------------\n');

    // if(isEligible){
    //     console.log('Eligible for voting');
    // }
    // else{
    //     console.log('Not Eligible for Voting');
    // }

    // console.log('------------------------------');

    // const age = window.prompt('\nplease Enter your Age')
    // console.log('Age',age);

    // if(age>=18)
    // {
    //     console.log('Eligible for voting');
    // }
    // else{
    //     console.log('Not Eligible for voting');
    // }

    // console.log('-----------------------------');


    // To open a new Tab 
    // window.open('www.flipkart.com');

    // To close a open Tab
    // window.close();


    // write a code that redirects to different websites 
    // based on the values entered IN the prompt page

    // const enterValue = prompt('enter a value  1,2,3 for different websites',1)

    // if(enterValue===1){
    //     window.open('www.flipkart.com')
    // }
    // else if(enterValue===2){
    //     window.open('www.snooopdeal.com')
    // }
    // else{
    //     window.open('www.amazon.com')

    // }
    // console.log(window);


    // history object
    console.log('history object',history);

    //location object
    console.log('location object',location);

    // nvaigatior object
    console.log(`navigator object`,navigator);

    navigator.geolocation.getCurrentPosition(loc => {
            console.log('location',loc);
        }
    );