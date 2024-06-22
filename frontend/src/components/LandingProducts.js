import React, { useState } from 'react';

import LandingSearchComponent from './LandingSearchComponent';
import LandingShowCourseComponent from './LandingShowCourseComponent';
import LandingUserCartComponent from './LandingUserCartComponent';
import './Students.css';

const StudentProducts = () => {
    const [products, setProducts] = useState([
        { id: 1, 
          name: 'pro game coding toy', 
          price: 1299, 
          image: 
'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1.png'
        },
        { id: 2, 
          name: 'coding toy', 
          price: 699, 
          image: 
'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1.png'
        },
        { id: 3, 
          name: 'pro game coding toy', 
          price: 799, 
          image: 
'https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1.png'
        }
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (NGOcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === NGOcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === NGOcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: NGOcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (NGOCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== NGOCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = products.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <LandingSearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <LandingShowCourseComponent
                    courses={products}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <LandingUserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    )
}

export default StudentProducts;
