const listaAlunos = [
  "Claudio",
  "Vinícius Emanuel",
  "Vinicius",
  "Ronaldo",
  "Thyago",
  "Paulo",
  "Adenilson",
  "Thomas",
  "Leonardo",
  "Kauan",
  "Kevin",
  "Marcos",
  "Rafael",
  "Gabriel",
  "Matheus",
  "Guilherme",
  "Gustavo",
]

let alunosVisiveis = false

function atualizarContador() {
  const contador = document.getElementById("contador")
  contador.textContent = `Total: ${listaAlunos.length} alunos`
}

function mostrarAlunos() {
  const alunosContainer = document.getElementById("alunos")
  const listaContainer = document.getElementById("listaContainer")

  alunosContainer.innerHTML = ""

  listaAlunos.forEach((aluno, index) => {
    const li = document.createElement("li")
    li.textContent = aluno
    li.style.animationDelay = `${index * 0.1}s`
    alunosContainer.appendChild(li)
  })

  // Show the list with animation
  setTimeout(() => {
    alunosContainer.classList.add("show")
  }, 100)

  atualizarContador()
  alunosVisiveis = true
}

function ocultarAlunos() {
  const alunosContainer = document.getElementById("alunos")
  alunosContainer.classList.remove("show")
  alunosVisiveis = false
}

function limparLista() {
  if (listaAlunos.length === 0) {
    alert("A lista já está vazia!")
    return
  }

  if (confirm("Tem certeza que deseja limpar toda a lista de alunos?")) {
    listaAlunos.length = 0
    const alunosContainer = document.getElementById("alunos")
    alunosContainer.innerHTML = ""
    alunosContainer.classList.remove("show")
    atualizarContador()
    alunosVisiveis = false

    // Update button text
    const mostrarBtn = document.getElementById("mostrarBtn")
    mostrarBtn.textContent = "Mostrar Alunos"
  }
}

function adicionarAluno() {
  const input = document.getElementById("novoAluno")
  const nomeAluno = input.value.trim()

  if (nomeAluno === "") {
    alert("Por favor, digite um nome válido!")
    input.focus()
    return
  }

  if (listaAlunos.includes(nomeAluno)) {
    alert("Este aluno já está na lista!")
    input.focus()
    return
  }

  listaAlunos.push(nomeAluno)
  input.value = ""

  // If list is visible, refresh it
  if (alunosVisiveis) {
    mostrarAlunos()
  } else {
    atualizarContador()
  }

  // Success feedback
  input.style.borderColor = "#28a745"
  setTimeout(() => {
    input.style.borderColor = "#4a90e2"
  }, 1000)
}

document.addEventListener("DOMContentLoaded", () => {
  const mostrarBtn = document.getElementById("mostrarBtn")
  const limparBtn = document.getElementById("limparBtn")
  const adicionarBtn = document.getElementById("adicionarBtn")
  const novoAlunoInput = document.getElementById("novoAluno")

  // Toggle show/hide students
  mostrarBtn.addEventListener("click", function () {
    if (!alunosVisiveis) {
      mostrarAlunos()
      this.textContent = "Ocultar Alunos"
    } else {
      ocultarAlunos()
      this.textContent = "Mostrar Alunos"
    }
  })

  // Clear list
  limparBtn.addEventListener("click", limparLista)

  // Add student
  adicionarBtn.addEventListener("click", adicionarAluno)

  // Add student on Enter key
  novoAlunoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      adicionarAluno()
    }
  })

  // Initialize counter
  atualizarContador()
})