"use client"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductRating = ({currentRating, numberRatings, productId}: any) => {
    return ( 
        <div className="flex gap-1 items-center">
            {[...Array(5)].map((item, index)=>(
              <label  key={productId}>
              <FontAwesomeIcon icon={faStar} size="sm" className={index <= currentRating ? 'text-yellow-400' : 'text-accent'}/>

              </label>
            ))}
          <p className="text-xs opacity-50">({numberRatings})</p>
        </div>
     );
}
 
export default ProductRating;