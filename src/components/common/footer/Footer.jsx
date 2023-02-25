import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/' alt='' />
            <p>CALL CENTER</p>
            <i className='fa fa-envelope'></i>
            <span> RAFMEDIA@GMAIL.COM </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +62 82111369 </span>
          </div>
          <div className='box'>
            
            <div className='item'>
            
            </div>
            <div className='item'>
              
            </div>
          </div>
          <div className='box'>
            
            <div className='item'>
            
            </div>
            <div className='item'>
              
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>SPORT</span> <label>(0)</label>
              </li>
              <li>
                <span>FASHION</span> <label>(0)</label>
              </li>
              <li>
                <span>HEALHTY</span> <label>(0)</label>
              </li>
              <li>
                <span>NATURE</span> <label>(0)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made by <i className=''></i> RAFTIGAENAMSEMBILAN
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
