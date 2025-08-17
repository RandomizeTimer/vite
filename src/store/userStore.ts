import { makeAutoObservable, flow } from "mobx";

interface IDirectory {
    loading: boolean;
    error: string | null;
}

interface IUserValue {
    id: number;
    roleId: number;
    name: string;
}

interface IRoleValue {
    id: number;
    name: string;
}

interface IUsers extends IDirectory {
    value: IUserValue[];
}

interface IRoles extends IDirectory {
    value: IRoleValue[];
}

const userData: IUserValue[] = [
    { id: 1, roleId: 1, name: "user1" },
    { id: 2, roleId: 2, name: "user2" },
    { id: 3, roleId: 3, name: "user3" },
];

const roleData: IRoleValue[] = [
    { id: 1, name: "user" },
    { id: 2, name: "admin" },
    { id: 3, name: "auditor" },
];

class UserStore {
    users: IUsers = { value: [], loading: false, error: null };
    roles: IRoles = { value: [], loading: false, error: null };

    constructor() {
        makeAutoObservable(this, {
            fetchUsers: flow,
            fetchRoles: flow,
        });
    }

    getRoleNameById(id: number) {
        const role = this.roles.value.find((role) => role.id === id);

        return role?.name;
    }

    *fetchUsers() {
        this.users.loading = true;
        this.users.error = null;

        try {
            const response = (yield new Promise<IUserValue[]>((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.1 // 10% шанс ошибки
                        ? resolve(userData)
                        : reject(new Error("Не удалось загрузить пользователей"));
                }, 1500);
            })) as IUserValue[];

            this.users.value = response;
        } catch (err: any) {
            this.users.error = err.message;
        } finally {
            this.users.loading = false;
        }
    }

    *fetchRoles() {
        this.roles.loading = true;
        this.roles.error = null;

        try {
            const response = (yield new Promise<IRoleValue[]>((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.1 // 10% шанс ошибки
                        ? resolve(roleData)
                        : reject(new Error("Не удалось загрузить роли"));
                }, 2500);
            })) as IRoleValue[];

            this.roles.value = response;
        } catch (err: any) {
            this.roles.error = err.message;
        } finally {
            this.roles.loading = false;
        }
    }
}

const userStore = new UserStore();

export default userStore;
