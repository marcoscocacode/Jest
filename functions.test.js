const functions = require ('./functions')

test('Adds 2 + 2 to equal 4', () => {
  // Dentro do expect você adiciona os parametros
  expect(functions.add(2, 2)).toBe(4) 
})

test('Adds 2 + 2 to NOT equal 4', () => {
  // Adiciona o .not para testar, assim passando somente valores diferentes do toBe
  expect(functions.add(2, 2)).not.toBe(5) 
})

// Fazer a checagem de valores TRUTHY & FALSY

// toBeNull checa se o valor é null
// toBeUndefined checa se o valor é undefined
// toBeDefined o oposto do toBeUndefined
// toBeTruthy checa por se um estado do If verdadeiro
// toBeFalsy checa por se um estado do If falso

test('Should be null', () => {
  expect(functions.isNull()).toBeNull() 
})

test('Should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy() 
})

test('User should be Wilson Klebler object', () => {
  // Para fazer a comparação entre objetos o recomendado é o toEqual
  expect(functions.createUser()).toEqual({ 
    firstName: "Wilson", 
    lastName: "Klebler" 
  }) 
})

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i)
})

test("Admin should be in usernames", () => {
  usernames = ["karls", "barls", "tarls", "admin"]
  expect(usernames).toContain("admin")
})

// Working with async data
test("User fetched name shoulb be Leanne Graham", () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual("Leanne Graham")
    })
})