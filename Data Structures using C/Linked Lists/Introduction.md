### :link: Introduction of Linked Lists

A linked list, in simple terms is a linear collection of data elements. These data elements are called _nodes_. Linked list is data structure which in turn can be used to implement other data structures. Thus, it acts as a building block to implement data structures like stacks, queues, and their variations. A linked list can be perceived as a :bullettrain_front: train or sequence of nodes in which each node contains one or more data fields and a pointer to the next node.

<p align="center">
<img src="./assets/Simple Linked List.png" alt="Simple Linked List"/>
<p>
<p align="center">
Simple Linked List
</p>

Each node of linked list contains two parts, an integer and a pointer to the next node. The left part of the node which contains a pointer data may include a simple data type, an array, or a structure. The right part of the node contains a pointer to the next node(or the address of the next node in sequence). The last node will have no next node connected to it, so it will store a special value called `NULL`. In above figure, the `NULL` pointer is represented by x. Since in a linked list, every node contains a pointer to another node which is of the same tye, it is also called a _self-referential data type_.

Linked list contains a pointer variable `START` that stores the address of the first node in the list. We can traverse the entire list using single pointer variable called `START`. The `START` node will contain the address of the first node; the next part of the first node will in turn store the address of its succeeding node. Using this technique, the individual nodes of the list will form a chain of nodes. If `START = NULL`, then the linked list is empty and contains no nodes.

In C, we will implement a linked list using the following code:

```c
struct node
{
    int data;
    struct node *next;
}
```

Let us see how linked list is maintained in memory. In order to form a linked list, we need a structure called _node_ which has two fields, `DATA` and `NEXT`. DATA will store the information part and NEXT will store the address of the next node in sequence.

<p align="center">
<img src="./assets/Linked List Memory Representation.png" alt="Linked List Memory Representation"/>
<p>
<p align="center">
Linked List Memory Representation</p>

In the figure, we see that the variable `START` is used to store the address of the first node. Here, in this example `START = 1`, so the first data is stored at address 1, which is `H`. The corresponding `NEXT` stores address of the next node, which is `4`. So, we will look at address `4` to fetch the next data item. The second data element obtained from address `4` is `E`, Again we see the corresponding `NEXT` to go to next node. From the entry in the `NEXT`, we get the next address, that is 7, and fetch `L` as the data. We repeat this procedure until we reach a position where `NEXT` entry contains `-1` or `NULL`, as this would denote the end of the linked list. When we traversed DATA and NEXT in this manner, we finally see that the linked list in the above example stores characters that when put together forms the world `HELLO`.

> **Note** that the figure shows a chunk of memory locations whose address ranges from 1 to 10. The shaded portion contains data for other applications. Remember that the nodes of linked list need not be an consecutive memory locations. In our example, the nodes for linked list are stored at address 1, 4, 7, 8, 10.
