const fs = require('fs')
const postcss = require('postcss')

const [from, to] = ['src/all.css', 'base.css']
const css = fs.readFileSync(from, 'utf8')

const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const title = packageFile.name + ' v' + packageFile.version
const license = packageFile.license + ' License'
const link = 'github.com/' + packageFile.repository.split(':')[1]
const header = '/*! ' + [title, license, link].join(' | ') + ' */'

const plugins = [
  require('postcss-import'),
  require('autoprefixer'),
  require('postcss-minify'),
]

postcss(plugins)
  .process(css, { from })
  .then(({ css}) => fs.writeFile(to, [header, css].join('\n\n'), () => true))
