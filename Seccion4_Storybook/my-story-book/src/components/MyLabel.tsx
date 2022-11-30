import './mylabel.css'

interface MyLabelProps {
  /**
   * This is the text to display
   */
  label: string

  /**
   * This is the size of the text
   */
  size: 'normal' | 'h1' | 'h1' | 'h2' | 'h3'

  /**
   * This is whether the text should be all caps
   */
  upperCase?: boolean

  /**
   * This is the color of the text
   */
  color?: 'primary' | 'secondary' | 'tertiary',

  /**
   * This is the color of the text in HEX
   */
  fontColor?: string
}


/**
 * Label component to display text
 */
const MyLabel = ({
  label = 'Example label',
  size = 'normal',
  upperCase = false,
  color = 'primary',
  fontColor = '#000000'
}: MyLabelProps ) => {

  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
      {upperCase ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel