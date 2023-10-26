import { arch, platform } from 'node:os';

export function showInfo() {
    console.log(arch());
    console.log(platform());
}