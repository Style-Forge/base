const fs = require('fs')
const postcss = require('postcss')
const atImport = require('postcss-import')
const autoprefixer = require('autoprefixer')

const [from, to] = ['src/all.css', 'base.css']
const css = fs.readFileSync(from, 'utf8')

const package = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const title = package.name + ' v' + package.version
const license = package.license + ' License'
const link = 'github.com/' + package.repository.split(':')[1]
const header = '/*! ' + [title, license, link].join(' | ') + ' */'

postcss([atImport, autoprefixer])
  .process(css, { from })
  .then(({ css}) => {
    fs.writeFile(to, [header, css].join('\n\n'), () => true)
  })
