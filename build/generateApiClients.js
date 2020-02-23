/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process')
const prependFile = require('prepend-file')
const glob = require('glob')

/**
 * To try out additional APIs, search through available projects listed here:
 * https://any-api.com/
 * JSON Schema definitions can be found from the Netowrk tab when viewing each API
 */
const apiClients = [
  // Custom API created here: https://github.com/jackkoppa/gs-spring-boot
  {
    name: 'candidate',
    spec: 'https://vueconf-2020-ts-api-demo.herokuapp.com/v2/api-docs'
    // For generating locally
    // spec: "http://localhost:8080/v2/api-docs"
  },
  // Movie reviews API, with auth info here: https://developer.nytimes.com/get-started
  {
    name: 'timesmovies',
    spec:
      'https://any-api.com/openapi/nytimes_com_movie_reviews.2_0_0.openapi.json'
  }
]

function generateApiClients () {
  apiClients.forEach(client => {
    const outputDirectory = `./src/api/${client.name}`
    console.log(`Generating API Client for ${client.name}`)
    const generate = execSync(
      `npx openapi-generator generate -i ${client.spec} -o ${outputDirectory} -g typescript-axios -c ./build/openapiConfig.json`
    )
    console.log(
      generate.toString(),
      `\n\nSuccessfully generated API Client for ${client.name}`
    )
    glob(`${outputDirectory}/*.ts`, undefined, function (globError, files) {
      if (globError) {
        console.warn(`failed to find .ts api files for ${outputDirectory}`)
      } else {
        files.forEach(file => {
          prependFile(
            file,
            '/* eslint-disable */\n',
            err => err && console.warn(`Failed to add "eslint-disable" to ${file} generated file`)
          )
        })
      }
    })
  })
}

generateApiClients()
