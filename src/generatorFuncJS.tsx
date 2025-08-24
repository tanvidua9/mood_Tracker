function* hello(){
    console.log("hELLO");
    yield 10;
    console.log("I am Tanvi Dua");
    yield 20;
    console.log("I am from ynr");
    return 1;  //the function ends here even if we don't write return, mentioned that we haven't written yield
}

const xyz = hello(); //won't call the function but returns an interator of the function
const a= xyz.next();  //calls and prints till the first yield
const b= xyz.next() //prints till the second yield
const c= xyz.next() //prints nothing and returns 1 value as the function ends

console.log(a); //prints something like:
// {
//     "value":10;
//     "done":false;  //indicates the function is not finished yet
// }

console.log(c);
// {
//     "value":1;
//     "done":true;  //indicates the function is finished
// }




function* test1():Generator {
  const data1 = yield 5;
  const data2 = yield 10;

  console.log("data1", data1);
  console.log("data2", data2);

  return 100;
}

const temp = test1();

const v1 = temp.next(-99);
const v2 = temp.next(100);
const v3 = temp.next(5);


//OUTPUT
// data1 100
// data2 5

//WHY?
// xyz.next(x) feeds x into the last yield.
// That’s why data1 became 100 and data2 became 5.

