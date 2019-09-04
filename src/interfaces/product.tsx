export default interface IProduct{
    id: number,
    name: string,
    old_price: number,
    price: number,
    image: string,
    category_id: number,
    is_leader: boolean,
    is_new: boolean
}