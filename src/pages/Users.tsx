import { observer } from "mobx-react-lite";
import { Select, Table } from "antd";
import userStore from "../store/userStore";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Role",
        dataIndex: "roleId",
        key: "roleId",
        render: (id: number) => userStore.getRoleNameById(id),
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
];

const Users = observer(() => {
    const options = userStore.roles.value.map((role) => ({ value: role.id, label: role.name }));

    console.log("render");

    // if (userStore.users.error) {
    //     return <p style={{ color: "red" }}>Ошибка: {userStore.users.error}</p>;
    // }

    return (
        <div>
            <h1>Пользователи</h1>
            <Select options={options} loading={userStore.roles.loading} style={{ width: "100%" }} />
            <Table rowKey="id" columns={columns} dataSource={userStore.users.value} loading={userStore.users.loading} />
        </div>
    );
});

export default Users;
