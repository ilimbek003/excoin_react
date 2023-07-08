import React, { useEffect, useState } from "react"; 

const Pagination = ({pages = 7, setCuurenPage}) =>{

    const numberOfPage = []
    for(let i = 1; i <= pages; i++){
        numberOfPage.push(i)
    }
    console.log();
    const [currentButton,setCurrentButton] = useState(1)
    const [arrOfCuurButtons,setArrOfCuurButtons] = useState([])
    useEffect(() =>{
        let tempNumberOfPages = [...arrOfCuurButtons]
        let dotsInitial = "..."
        let dotsLeft = "..."
        let dotsRigth = "..."
        if(numberOfPage.length < 6){
            tempNumberOfPages = numberOfPage
        }else if (currentButton >= 1 && currentButton <= 3){
            tempNumberOfPages = [1,2,3,4, dotsInitial, numberOfPage.length]
        }else if (currentButton === 4){
            const sliced = numberOfPage.slice(0, 5)
            tempNumberOfPages = [1,2,3,4, dotsInitial, numberOfPage.length]
        }else if (currentButton > 4 && currentButton < numberOfPage.length - 2){
            const sliced1 = numberOfPage.slice(currentButton -2, currentButton)
            const sliced2 = numberOfPage.slice(currentButton, currentButton + 1)
            tempNumberOfPages = ([1 ,dotsLeft, ...sliced1, ...sliced2, dotsRigth, numberOfPage.length])

        }
        setArrOfCuurButtons(tempNumberOfPages)
        setCuurenPage(currentButton)
    },[currentButton])
    return (
        <div>
               <a href="#">
                Prev
               </a>
               {
                arrOfCuurButtons.map((item,index) =>{
                    return <a 
                    href="#" key={index} 
                    className={`${currentButton === item ? 'active' : ''}`}
                    onClick={() => setCurrentButton(item)}
                    >
                        {item}
                    </a>
                })
               }
               <a href="#">
                Next
               </a>
        </div>
    )
}

export default Pagination