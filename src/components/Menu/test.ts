export {}
interface A {
    name: string;
}

interface B {
    age:number;
    work:string
}
// 定义多个类型
function identity <T,U>(value: T,value1: U) : T {
    return value;
}

identity<number,string>(1,'a')

function getNumber<T>(args: T[]): T[]{

    return args
}

getNumber([1])

type X1 = Partial<A>
let x: X1 = {

}

// Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。

interface PageInfo{
    title: number 
}

type Page = 'a'

let m: Record<Page,PageInfo> = {
 
    a: {
        title: 1
    }
}

console.log(m);
