import * as vscode from 'vscode'

class Orange {
  constructor () {
    console.log(vscode.workspace.getConfiguration())

    let sumNum = 5

    if (typeof sumNum === 'number') {
      sumNum = 2000
    } else {
      throw new Error('Erropal')
    }
  }

  sumMethod () {
    console.log('Hello World')
  }
}

function apple (hello: string) {
  console.log('STRING TEST APPLE OR WHATEVER')
  console.log(hello)
}

const orange = new Orange()

orange.sumMethod()
// h
apple('Hello World!')
