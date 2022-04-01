#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    while(t--) {
        int n;
        cin >> n;
        vector<long long> v(n);
        for(int i = 0; i < n; i++)  
            cin >> v[i];
        int maxi = *max_element(v.begin(), v.end());
        long long sum = 0;
        bool found = false;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                if(v[i] != maxi and v[j] != maxi) {
                    sum = v[i] + v[j];
                    if(sum < maxi) {
                        cout << "YES\n";
                        found = true;
                        break;
                    }
                }
            } if(found) break;
        } 
        if(!found) cout << "NO\n";

    }
}