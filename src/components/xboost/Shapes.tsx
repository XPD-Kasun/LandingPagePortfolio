export function SoftArrow({className}) {

       return (
              <svg className={className} viewBox="0 0 500 695" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M500 -24H220V-23.9353C194.171 -23.7928 168.277 -10.9011 153.712 17.4919L8.37793 300.812C-2.79264 322.588 -2.79264 348.412 8.37792 370.188L153.712 653.508C168.277 681.901 194.171 694.793 220 694.935V695H500V-24Z" fill="currentColor" />
              </svg>
       )
}


export function SoftArrowSpiral({className}) {

       return (
              <div className={className}>
                     <SoftArrow className=""/>
                     <img className="absolute bottom-0 right-0 object-fill w-4/5" src="./xboost/img/spiral.png" />
              </div>
       )
}