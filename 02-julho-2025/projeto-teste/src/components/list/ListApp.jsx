function ListApp() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Profissão</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João</td>
                        <td>30</td>
                        <td>Engenheiro</td>
                        <td>Rua A, 123</td>
                    </tr>
                    <tr>
                        <td>Maria</td>
                        <td>25</td>
                        <td>Designer</td>
                        <td>Rua B, 456</td>
                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>28</td>
                        <td>Professor</td>
                        <td>Rua C, 789</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListApp;