# Array

### Time Complexity

Data structure의 operation 또는 algorithm이 "얼마나 빠르고 느린지" 측정
-> 실제 시간측정x 얼마나 많은 단계(step)가 있는지로 판단

### Memory

- Volatile Memory

  램 ; 컴퓨터 종료시 날아가는 데이터

  - RAM(Random Access Memory)

- Non-volatile Memory

  하드디스크 ; 종료해도 날아가지 않는 데이터

## Array Operation

1. Reading

   index number로 접근하기 때문에 Read속도가 매우 빠름

2. Searching

   기본적으로 array 안의 모든 값을 순차적으로 다 읽어야 하므로 속도가 느릴 수 있음

3. Insert (Add)

   a) array 마지막에 추가 : easy -> 빠름

   b) array 중간에 추가 : 추가될 위치 이후의 모든 값을 뒤로 옮겨야함 -> 느림

   c) array가 꽉 차있는 상태에서 추가 : 새로운 array 공간을 확보한 후 옮겨서 추가해야함 -> 느림

4. Delete

   add와 비슷
