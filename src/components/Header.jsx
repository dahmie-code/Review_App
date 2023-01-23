import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <header style= {headerStyle} className='head'>
        <nav>
            <h1>{text}</h1>
        </nav>
    </header>
  )
}

Header.defaultProps = {
    text: 'Review Application',
    bgColor: '#2F3E46',
    textColor: '#fff'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header

