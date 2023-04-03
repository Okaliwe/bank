const Button = ({styles}) => {
    return ( 
        <button type="button" className={`${styles} py-4 px-6 bg-blue-gradient font-poppins fontimedium text-[18px] text-primary outline-none rounded-[10px]`}>
            Get started
        </button>
     );
}
 
export default Button;