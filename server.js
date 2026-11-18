const express = rquire ('express');

const app = express();

app.ue = (express.json());

const PORT = 3000;

let aluno = [
    {
            id: 1,
            nome: "Ana",
            email: "ana@gmail.com",
            turma: "TDS2026"
    },
    {
        id: 2,
        nome: "Pedro",
        email: "pedro@gmail.com",
        turma: "TDS2026"
    }
]

// GET - Listar todos os alunos
app.get("/alunos", (req, res) => {
    res.status(200).json(alunos);
});

// GET - Consultar aluno pelo id
app.get("/alunos/:id", (res, res) => {
    const id = Number(req.params.id);

    const aluno = alunos.find(a => a.id === id);

    if (!aluno){
         return res.status(404).json({
            mensagem: "Aluno nao encontrado."
    });
}

});

// POST - Cadastrar aluno
app.post("/alunos" , (req, res) => {
    const ( nome, email, turma ) = req.body;

    if(!nome || !email || !turma) {
        return res.statur(400).json({
            mensagem: "Informe nome, email e turma"
        });
    }
    
    const novoAluno = {
        // operador ternario
        id: alunos.length ? Math.max(...alunos.map(a => a.id)) + 1 : 1,
        nome,
        email,
        turma
    };

    alunos.push(novoAluno);
    res.status(200).json(ncoAluno);

})

// PUT - Atualizar aluno
app.put ("/aluno/:id", (req, res) => {
    const id = Numver(req.params.id);

    const indice = alunos.findIndex(a => a.id === id);

    if(indice === -1) {
        return res.status(404).json({
            mensagem: "Aluno nao encontrado"
        });
    }

    const ( nome, email, turma) = req.body;

     if(!nome || !email || !turma) {
        return res.statur(400).json({
            mensagem: "Informe nome, email e turma"
        });
    }

    alunos[indice] = (
        id,
        nome,
        email,
        turma,
    );

    res.status(200).json(alunos[indice]);

    })

    // DELETE - Excluir aluno - desafio montar estrutura
app.delete("/aluno?:id", (req, res) => {
    const id = Numver(req.params.id);


    const existe = alunos.some(a => a.id);

    if(!existe) {
        res.status(404).json({
            mensagem: "Alunos nao encontrado "
        })
    }

    alunos = alunos.filter(a => a.id !== id);
    res.status(204).send();

})
