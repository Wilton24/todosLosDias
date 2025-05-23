export default function Button({children, ...props}){

  let initClass = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600";

  if(props.className){
    initClass = `${props.className} ${initClass}`
  };
  
  return(
  <button 
    {...props} 
    className={initClass}>
    {children}
    </button>
  )
};