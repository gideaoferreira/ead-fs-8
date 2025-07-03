function ListApp() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Data de Criação</th>
                        <th>Data de Conclusão</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Estudar React</td>
                        <td>Revisar os conceitos básicos de React</td>
                        <td>2025-07-01</td>
                        <td>2025-07-02</td>
                        <td>Concluído</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Aprender Redux</td>
                        <td>Estudar a gestão de estado com Redux</td>
                        <td>2025-07-03</td>
                        <td></td>
                        <td>Pendente</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListApp;