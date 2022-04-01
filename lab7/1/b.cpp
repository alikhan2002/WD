#include<bits/stdc++.h>
using namespace std;
#define ll long long
int main() {
    set<ll> st;
    for(ll i = 1; i * i <= 1e9; i++) 
        st.insert(i * i);
    

    for(ll i = 1; i * i * i<= 1e9; i++) 
        st.insert(i * i * i);

    int t; 
    cin >> t;
    while(t--) {
        int n; 
        cin >> n;
        int ans = 0; 
        for(auto i: st) {
            if(i <= n) ans++;
            else break;
        }
        cout << ans << "\n";
    }
}