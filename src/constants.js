import categoryImg01 from './assets/images/category-01.png'
import categoryImg02 from './assets/images/category-02.png'
import categoryImg03 from './assets/images/category-03.png'
import categoryImg04 from './assets/images/category-04.png'
import serviceImg01 from './assets/images/service-01.png';
import serviceImg02 from './assets/images/service-02.png';
import serviceImg03 from './assets/images/service-03.png';


export const  navLinks =[
    {
        display:'Home',
        path:'/home'
    },
    {
        display:'Foods',
        path:'/foods'
    },
    {
        display:'Cart',
        path:'/cart'
    },
    {
        display:'Contact',
        path:'/contact'
    },
];

export const categoryData = [
    {
        display:'Fastfood',
        immageUrl: categoryImg01
    },
    {
        display:'Pizza',
        immageUrl: categoryImg02
    },
    {
        display:'Asian Food',
        immageUrl: categoryImg03
    },
    {
        display:'Row Meat',
        immageUrl: categoryImg04
    },
    
];

export const servicesData = [
    {
        imageUrl: serviceImg01,
        text: 'Quick Delivery',
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, nemo.'
    },
    {
        imageUrl: serviceImg02,
        text: 'Super Dine In',
        title: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, nemo.'
    },
    {
        imageUrl: serviceImg03,
        text: 'Easy Pick Up',
        title: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, nemo.'
    },
]

