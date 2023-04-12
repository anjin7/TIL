# Object

## 객체 생성과 프로퍼티 접근

```
const food1 = {
  name: '햄버거',
  price: 5000,
  vegan: false
};

console.log(food1);
// {name: '햄버거', price: 5000, vegan: false}
console.log(
  food1.name, // 마침표 프로퍼티 접근 연산자
  food1['price'] // 대괄호 프로퍼티 접근 연산자
);

// 햄버거 5000
```
