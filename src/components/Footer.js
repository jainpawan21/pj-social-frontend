import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer style={{position: 'absolute', bottom: 0, width: '100%'}} className="d-sm-none bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </div>
  )
}
