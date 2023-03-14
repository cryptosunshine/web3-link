import { getAddress } from '@ethersproject/address';

export function isEvmAddress(value: any): string | false {
    try {
        return getAddress(value)
    } catch {
        return false
    }
}