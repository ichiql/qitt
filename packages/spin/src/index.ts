// eslint-disable-next-line @typescript-eslint/no-var-requires
const rl = require('readline')

const spin_char = ['⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏', '⠋']

let spin_count = 0
export const spin = ({ prefix, suffix }: { prefix?: string; suffix?: string }) => {
  process.stdout.write('\x1B[?25l')
  rl.clearLine(process.stdout, 0)
  rl.moveCursor(process.stdout, -9999, 0)
  process.stdout.write(`${prefix ?? ''}${spin_char[spin_count]}${suffix ?? ''}`)
  spin_count++
  spin_count >= spin_char.length ? (spin_count = 0) : null
}

export const spinEnd = () => process.stderr.write('\n\x1B[?25h')
