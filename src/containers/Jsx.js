let name='Raj';
function CheckEvenOrOdd(char){
    if(num % 2 === 0){
        return <div>Even</div>
      }
      else {
        return <div>Odd</div>
      }
    }
function CheckAlphabet(char){
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return <div> Vowel</div>
      default:
        return<div>Not Vowel</div>
  }
}
let num = 4;
const users=[
  {name: 'Raj' , age: 25},
  {name: 'Jai' , age: 24},
  {name: 'Abhi' , age: 21}
]
 
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <div>
        <h3>If Else Statement</h3>
        {
          CheckEvenOrOdd(5)
        }
        {
          num%2===0? 
          <div> Even Number</div>
          :<div>Odd Nnumber</div>
        }
        <h3>If Statement</h3>
        {
          num%2===0 &&<div>Even Number</div>
        }
        {
          num%2===0 &&<div>Odd Number</div>
        }
      </div>

      <h3>Loop</h3>
      {
        users.map((item,index)=>{
          return <div key={index}>
            {item.name} - {item.age} </div>
        })
      }
      <h3>switch</h3>
      {
      CheckAlphabet('z')
      }
    </div>
  );
}

export default Jsx;

export function Greet() {
    return <h1> Hello World</h1>
}
