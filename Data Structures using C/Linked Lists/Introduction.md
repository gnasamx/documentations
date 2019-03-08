### :link: Introduction of Linked Lists

A linked list, in simple terms is a linear collection of data elements. These data elements are called _nodes_. Linked list is data structure which in turn can be used to implement other data structures. Thus, it acts as a building block to implement data structures like stacks, queues, and their variations. A linked list can be perceived as a :bullettrain_front: train or sequence of nodes in which each node contains one or more data fields and a pointer to the next node.

<p align="center">
<img src="./assets/Simple Linked List.png" alt="Simple Linked List"/>
<p>
<p align="center">
Figure: Simple Linked List
</p>

Each node of linked list contains two parts, an integer and a pointer to the next node. The left part of the node which contains a pointer data may include a simple data type, an array, or a structure. The right part of the node contains a pointer to the next node(or the address of the next node in sequence). The last node will have no next node connected to it, so it will store a special value called `NULL`. In above figure, the `NULL` pointer is represented by x. Since in a linked list, every node contains a pointer to another node which is of the same type, it is also called a _self-referential data type_.

Linked list contains a pointer variable `START` that stores the address of the first node in the list. We can traverse the entire list using single pointer variable called `START`. The `START` node will contain the address of the first node; the next part of the first node will in turn store the address of its succeeding node. Using this technique, the individual nodes of the list will form a chain of nodes. If `START = NULL`, then the linked list is empty and contains no nodes.

In C, we will implement a linked list using the following code:

```c
struct node
{,
    int data;
    struct node *next;
}
```

**One linked list in memory**

Let us see how linked list is maintained in memory. In order to form a linked list, we need a structure called _node_ which has two fields, `DATA` and `NEXT`. DATA will store the information part and NEXT will store the address of the next node in sequence.

START => 1

| index | Data | Next |
| ----- | ---- | ---- |
| 1     | H    | 4    |
| 2     |
| 3     |
| 4     | E    | 7    |
| 5     |
| 6     |
| 7     | L    | 8    |
| 8     | L    | 10   |
| 9     |
| 10    | O    | -1   |

Figure: Linked List Memory Representation

In the figure, we see that the variable `START` is used to store the address of the first node. Here, in this example `START = 1`, so the first data is stored at address 1, which is `H`. The corresponding `NEXT` stores address of the next node, which is `4`. So, we will look at address `4` to fetch the next data item. The second data element obtained from address `4` is `E`, Again we see the corresponding `NEXT` to go to next node. From the entry in the `NEXT`, we get the next address, that is 7, and fetch `L` as the data. We repeat this procedure until we reach a position where `NEXT` entry contains `-1` or `NULL`, as this would denote the end of the linked list. When we traversed DATA and NEXT in this manner, we finally see that the linked list in the above example stores characters that when put together forms the world `HELLO`.

> **Note** that the figure shows a chunk of memory locations whose address ranges from 1 to 10. The shaded portion contains data for other applications. Remember that the nodes of linked list need not be an consecutive memory locations. In our example, the nodes for linked list are stored at address 1, 4, 7, 8, 10.

**Two linked list in memory**

Lets us take another example to see how two linked lists are maintained together in the computer's memory. For example, the students of class XI of science group are asked to choose between Biology and Computer Science. Now, we will maintain two linked list, one for each subject. That is, the first linked list will contain the roll numbers of all the students who have opted for Biology and second list will contain the roll numbers of students who have chosen Computer Science.

START => 1 (Biology)
START => 2 (Computer Science)

| Index | Roll No | Next |
| ----- | ------- | ---- |
| 1     | S01     | 3    |
| 2     | S02     | 5    |
| 3     | S03     | 8    |
| 4     |
| 5     | S04     | 7    |
| 6     |
| 7     | S05     | 10   |
| 8     | S06     | 11   |
| 9     |
| 10    | S07     | 12   |
| 11    | S08     | 13   |
| 12    | S09     | -1   |
| 13    | S10     | 15   |
| 14    |
| 15    | S11     | -1   |

Figure: Two linked list are simultaneously maintained in the memory

Two different linked list are simultaneously maintained in the memory. There is no ambiguity in traversing through the list because each list maintains a separate `START` pointer, which gives the address of the first node of their respective linked list. The rest of the nodes are reached by looking at the value stored in the `NEXT`

By looking at figure, we can conclude that roll number of students who have opted for Biology are S01, S03, S06, S08, S10, S11. Similarly, roll number of the students of the students who choose Computer Science are S02, S04, S05, S07, S09.

We have already said that the `DATA` part of a node may contain just a single data item, an array, or a structure. Lets us take an example to see how a structure is maintained in a linked list that os stored in the memory.

**Structure in linked list**

Consider a scenario in which the roll number, name, aggregate and grade of students are stored using linked list. Now we will see how `NEXT` pointer is used to store the data alphabetically.

START => 18

| Index | Roll No | Name   | Aggregate | Grade           | Next |
| ----- | ------- | ------ | --------- | --------------- | ---- |
| 1     | S01     | Ram    | 78        | Distinction     | 6    |
| 2     | S02     | Shyam  | 64        | First Division  | 7    |
| 3     |
| 4     | S03     | Mohit  | 89        | Outstanding     | 17   |
| 5     |
| 6     | S04     | Rohit  | 77        | Distinction     | 14   |
| 7     | S05     | Varun  | 86        | Outstanding     | 10   |
| 8     | S06     | Karan  | 65        | First Division  | 12   |
| 9     |
| 10    | S07     | Veena  | 54        | Second Division | -1   |
| 11    | S08     | Meera  | 67        | First Division  | 4    |
| 12    | S09     | Krish  | 45        | Third Division  | 13   |
| 13    | S10     | Kusum  | 91        | Outstanding     | 11   |
| 14    | S11     | Silky  | 72        | First Division  | 2    |
| 15    |
| 16    |
| 17    | S12     | Monica | 75        | Distinction     | 1    |
| 18    | S13     | Ashish | 63        | First Division  | 19   |
| 19    | S14     | Gaurav | 61        | First Division  | 8    |

Figure: Student's linked list
