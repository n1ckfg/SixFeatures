using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf6_classes : MonoBehaviour {

    public GameObject sphere;
    public int numSpheres = 4;

    private List<Dot> spheres;

    private void Start() {
        spheres = new List<Dot>();
        for (int i = 0; i < numSpheres; i++) {
            spheres.Add(Instantiate(sphere, new Vector3(0f, i * 1f, 0f), Quaternion.identity).GetComponent<Dot>());
        }
    }

}
