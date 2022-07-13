#include<bits/stdc++.h>
using namespace std;

int main()
{
    char base[] = {'A', 'T', 'G', 'C'};
    ofstream obj;
    obj.open("input.txt", ios::trunc);
    for(long int i = 1; i <= 3145728; i++)
        obj << base[rand()%4];
    obj.close();
}